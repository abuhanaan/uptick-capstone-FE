'use client';

import Link from 'next/link';
import { HiOutlinePlus } from "react-icons/hi";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";
import { HiOutlineEye } from "react-icons/hi2";
import { BsChatSquareText } from "react-icons/bs";
import { EmptySearch } from '../../components/empty-search';
import AddButton from '../../components/add-button';
import Modal from '../../components/modal';
import Tabs from '../../components/tabs';
import PostForm from './post-form';
import PostPreview from './preview';
import ImageForm from './image-form';
import { PreviewIcon } from '../../components/Icons';
import clsx from 'clsx';
import { useState, useEffect } from 'react';
import { getSession } from "next-auth/react";
import { useRouter } from 'next/navigation';
import { fetchBlogPosts, createPost } from 'app/utils/api';
import { signIn } from 'next-auth/react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

const Blog = () => {
    const [data, setData] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        author: '',
        file: null,
        tagsText: '',
        tagsArr: [],
        published: false,
        publicationDate: null,
    });
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    function handleSubmit(e) {
        e.preventDefault();

        formData.publicationDate = new Date(formData.publicationDate).toISOString();
        formData.tagsArr = formData.tagsText.split(/,\s*/);

        if (Object.values(formData).some(value => !value)) {
            console.log('One or more fields is empty');
            toast.error('Kindly fill all required fields', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 2000,
            });
        } else {
            const postData = {
                title: formData.title,
                content: formData.content,
                author: formData.author,
                file: formData.file,
                tags: formData.tagsArr,
                published: formData.published,
                publicationDate: formData.publicationDate
            };

            console.log(postData);

            // getSession()
            //     .then(session => {
            //         if (!session) {
            //             return signIn();
            //         }

            //         console.log('TOKEN: ', session.accessToken);
            //         axios.post('https://uptick-teama-capstone.onrender.com/posts', postData, {
            //             headers: {
            //                 'Content-Type': 'application/json',
            //                 'Authorization': `Bearer ${session.accessToken}`
            //             }
            //         })
            //             .then(response => {
            //                 console.log('Post created successfully:', response.data);
            //                 toast.success('Post created successfully', {
            //                     position: toast.POSITION.TOP_CENTER,
            //                     autoClose: 2000,
            //                 });

            //             })
            //             .catch(error => {
            //                 console.error('Error creating post:', error.response || error);
            //                 toast.error('Error creating post', {
            //                     position: toast.POSITION.TOP_CENTER,
            //                     autoClose: 2000,
            //                 });
            //             });
            //     })

            getSession()
                .then(session => {
                    if (!session) {
                        return signIn();
                    }

                    console.log('TOKEN: ', session.accessToken);
                    return fetch('https://uptick-teama-capstone.onrender.com/posts', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${session.accessToken}`
                        },
                        body: JSON.stringify(postData),
                    });
                })
                .then(response => {
                    console.log(response)
                    if (response.ok) {
                        console.log('Post created successfully:', response);
                        toast.success('Post created successfully', {
                            position: toast.POSITION.TOP_CENTER,
                            autoClose: 2000,
                        });
                    } else {
                        console.error('Error creating post:', response);
                        toast.success('Error creating post', {
                            position: toast.POSITION.TOP_CENTER,
                            autoClose: 2000,
                        });

                        // return response.json().then(errorData => {
                        //     throw new Error(`Error creating post: ${errorData.message}`);
                        // });

                    }
                })
                .catch(error => {
                    console.error('Error creating post:', error);
                    toast.success('Error creating post', {
                        position: toast.POSITION.TOP_CENTER,
                        autoClose: 1000,
                    });
                });

        }
    }

    useEffect(() => {
        const fetchDataFromApi = () => {
            getSession()
                .then(session => {
                    if (session) {
                        fetchBlogPosts(session.accessToken)
                            .then(responseData => {
                                setData(responseData);
                                setIsLoading(false);
                            })
                            .catch(error => {
                                // Handle error
                                console.log(error);
                                router.replace('/');
                            });
                    } else {
                        // Redirect to login page if the user is not authenticated
                        router.replace('/');
                    }
                })
                .catch(error => {
                    console.error('An error occurred during session retrieval:', error);
                });
        };

        fetchDataFromApi();
    }, []);

    const tabs = [
        { id: 'tab1', label: 'Add Image', content: <ImageForm setFormData={setFormData} formData={formData} /> },
        { id: 'tab2', label: 'Post', content: <PostForm setFormData={setFormData} formData={formData} /> },
        { id: 'tab3', label: <span className='flex items-center gap-2'>Preview <PreviewIcon /></span>, content: <PostPreview formData={formData} handleSubmit={handleSubmit} /> }
    ];

    const [isModalOpen, setIsModalOpen] = useState(false);

    if (isLoading) {
        return (
            <div className="font-semibold text-xl h-screen w-full flex justify-center mt-20">Loading...</div>
        )
    }

    return (
        <div className="mt-6 min-h-screen">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-[#15254C] text-2xl font-bold">Blog Posts</h1>

                <AddButton toggleModal={setIsModalOpen}>Add New</AddButton>

                <Modal isOpen={isModalOpen} toggleModal={setIsModalOpen}>
                    <h2 className='text-2xl font-medium mb-8'>Edit</h2>
                    <Tabs tabs={tabs} />
                </Modal>
            </div>

            <ToastContainer />

            <div className="h-full overflow-auto">
                {
                    data?.length === 0 ?
                        <EmptySearch headers={['Posts', 'Published']} />
                        :
                        <div className="overflow-x-auto overflow-y-hidden w-full h-full">
                            <table className="table table-sm border-separate border-spacing-y-6">
                                <thead>
                                    <tr>
                                        <th className="text-lg font-semibold text-black pl-16">Posts</th>
                                        <th className="text-lg font-semibold text-black ">Published</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody className=''>
                                    {
                                        data?.map((post) => (

                                            <tr key={post.id} className="bg-white">
                                                <td className="w-2/3 px-7 py-8">
                                                    <Link href={`/dashboard/blog/${post.id}`}>
                                                        <div className="flex items-center gap-6">
                                                            <div className="avatar">
                                                                <div className="w-[248px] h-[160px]">
                                                                    <img src={post.image} alt="Kuda logo" />
                                                                </div>
                                                            </div>
                                                            <div className='flex flex-col gap-3'>
                                                                <div className="">Written by <span className='font-bold'>{post.author}</span></div>

                                                                <h3 className='line-clamp-2 text-2xl leading-9 font-bold'>{post.title}</h3>

                                                                <p className='line-clamp-2'>{post.content}</p>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </td>
                                                <td className="px-7 py-8">
                                                    {
                                                        new Date(post.publicationDate).toLocaleDateString('en-GB', {
                                                            day: '2-digit',
                                                            month: '2-digit',
                                                            year: 'numeric'
                                                        })
                                                    }
                                                </td>
                                                <td className='px-7 py-8 flex flex-col items-end gap-6'>
                                                    <div className="dropdown dropdown-end">
                                                        <label tabIndex={0} className="btn bg-transparent border-none shadow-none m-1 mt-14 font-bold text-xl hover:bg-transparent">
                                                            <HiOutlineEllipsisVertical size={22} />
                                                        </label>
                                                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                                            <li><Link href='#'>Edit</Link></li>
                                                            <li><Link href='#'>Delete</Link></li>
                                                        </ul>
                                                    </div>
                                                    <div className='flex justify-end gap-4 px-5'>
                                                        <div className='flex items-center gap-1'>
                                                            <HiOutlineEye size={24} />
                                                            <span className='text-lg font-semibold'>0</span>
                                                        </div>

                                                        <div className='flex items-center gap-1'>
                                                            <BsChatSquareText size={24} />
                                                            <span className='text-lg font-semibold'>0</span>
                                                        </div>

                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                }
            </div>
        </div>
    )
}

export default Blog;