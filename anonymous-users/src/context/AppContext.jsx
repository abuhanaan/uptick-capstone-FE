import { createContext, useContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  let [sidebarOpen, setSidebarOpen] = useState(false);
  const [adminSidebarOpen, setAdminSidebarOpen] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const toggleAdminSidebar = () => {
    setAdminSidebarOpen(!adminSidebarOpen);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const toggleDeleteModal = () => {
    setOpenDeleteModal(!openDeleteModal);
  };

  return (
    <AppContext.Provider
      value={{
        sidebarOpen,
        setSidebarOpen,
        toggleAdminSidebar,
        adminSidebarOpen,
        handleOpenModal,
        handleCloseModal,
        openModal,
        openDeleteModal,
        toggleDeleteModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
