import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authOptions } from 'app/api/auth/[...nextauth]/route';

async function getPost(id) {
    const session = await getServerSession(authOptions);
    const token = session.accessToken;
    const baseUrl = process.env.BASE_URL;

    try {
        const response = await fetch(`${baseUrl}/posts/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            next: { revalidate: 3600 }
        });
    
        if (response.status === 401 || response.statusText === 'Unauthorized') {
            redirect('/');
        } else if (response.statusCode === 404) {
            throw new Error(response.message);
        }
    
        return response.json();
    } catch (error) {
        throw new Error('An error occurred during post fetch:', error);
    }
}

const BlogPost = async ({ params }) => {
    const post = await getPost(params.id);

    return (
        <div className="mt-6">
            <div className="flex flex-col items-start gap-y-2 lg:flex-row lg:justify-between lg:items-center lg:mb-6">
                <div className="text-2xl breadcrumbs font-bold">
                    <ul>
                        <li className='text-[#C8D7FF]'><Link href='/dashboard/blog'>Blog</Link></li>
                        <li className='capitalize'>Preview</li>
                    </ul>
                </div>
            </div>

            <div className='flex flex-col mt-12 bg-gray-50 rounded-md px-36 py-10 gap-5'>
                <h4 className=''>Written by <span className='font-bold ml-3'>{post.author}</span></h4>

                <h1 className='text-2xl font-bold'>{post.title}</h1>

                <img src={post.image} className='w-full' alt="Post image" />

                <div>
                    {/* <Markdown className='text-sm'> */}
                    <p className=''>
                        {post.content}
                    </p>
                    {/* </Markdown> */}
                </div>
            </div>
        </div>
    )
}

export default BlogPost;