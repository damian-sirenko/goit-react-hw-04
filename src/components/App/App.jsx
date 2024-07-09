import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import css from "./App.module.css";
import { fetchImages } from "../../components/images-api.js";

import SearchBar from "../SearchBar/SearchBar.jsx";
import ImageGallery from "../ImageGallery/ImageGallery.jsx";
import Loader from "../Loader/Loader.jsx";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn.jsx";
import ImageModal from "../ImageModal/ImageModal.jsx";
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";

export default function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (newQuery) => {
    setImages([]);
    setPage(1);
    if (!newQuery) {
      toast("Please, add search query!", { position: "top-right" });
      return;
    }
    setQuery(newQuery);
  };

  useEffect(() => {
    if (!query) return;
    setIsLoading(true);
    const getImages = async () => {
      try {
        const { results, total } = await fetchImages(query, page);
        setImages((prevImages) =>
          page === 1 ? results : [...prevImages, ...results]
        );
        setTotal(total);
        setError(null);
      } catch (error) {
        setError("Oops! There is something wrong, please try again!");
      } finally {
        setIsLoading(false);
      }
    };
    getImages();
  }, [query, page]);

  const handleSubmit = async (text) => {
    setQuery(text);
    setPage(1);
    setImages([]);
    setError(null);
  };

  const handleClick = () => {
    setPage(page + 1);
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {isLoading && <Loader />}
      {error ? (
        <ErrorMessage message={error} />
      ) : (
        <>
          <ImageGallery images={images} onImageClick={openModal} />
          {images.length > 0 && images.length < total && (
            <LoadMoreBtn onClick={handleClick}>Load More</LoadMoreBtn>
          )}
        </>
      )}
      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        image={selectedImage}
      />
      <Toaster />
    </div>
  );
}
