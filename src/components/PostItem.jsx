import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal/Modal";
import PostService from "../API/PostService";

const PostItem = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Состояние для открытия модального окна
  const [currentPost, setCurrentPost] = useState(props.post); // Состояние для текущего поста
  const navigate = useNavigate();

   // Функция для удаления с подтверждением
   const handleDelete = async () => {
    const isConfirmed = window.confirm("Вы уверены, что хотите удалить этот семинар?");
    if (isConfirmed) {
      try {
        // Отправляем запрос DELETE на сервер для удаления семинара
        await PostService.deleteSeminar(props.post.id);
        alert("Семинар удален успешно!");
        // После удаления, обновляем список постов в родительском компоненте
        props.remove(props.post); // Удаляем пост из списка на клиенте
      } catch (error) {
        console.error("Ошибка при удалении семинара", error);
        alert("Произошла ошибка при удалении семинара.");
      }
    }
  };




  // Функция для открытия модального окна с данными поста
  const handleEditClick = () => {
    setCurrentPost(props.post); // Устанавливаем текущие данные семинара в состояние
    setIsModalOpen(true); // Открываем модальное окно
  };

  // Функция для закрытия модального окна
  const handleCloseModal = () => {
    setIsModalOpen(false); // Закрываем модальное окно
  };

  // Функция для сохранения изменений в посте
  const handleSaveChanges = (updatedPost) => {
    setCurrentPost(updatedPost); // Обновляем данные поста в состоянии
    props.updatePost(updatedPost); // Обновляем данные в родительском компоненте
    setIsModalOpen(false); // Закрываем модальное окно
  };

  return (
    <div className="post">
      <div className="post__content">
        <strong> {props.post.id}. {props.post.title} </strong>
        <div>{props.post.description}</div>
        <div>Дата семинара: {props.post.date}</div>
        <div>Время начала семинара: {props.post.time}</div>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => navigate(`/posts/${props.post.id}`)}>Подробнее о семинаре</MyButton>
        <MyButton onClick={handleEditClick}>Редактировать семинар</MyButton>
        <MyButton onClick={handleDelete}>Удалить семинар</MyButton>
      </div>

      {/* Модальное окно редактирования */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        post={currentPost} // Передаем текущие данные поста в Modal
        onSave={handleSaveChanges} // Передаем функцию для сохранения изменений
      />
    </div>
  );
};

export default PostItem;
