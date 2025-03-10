import React, { useState, useEffect } from "react";
import MyButton from "../UI/button/MyButton"; // Импортируем вашу кнопку
import PostService from "../../API/PostService"; // Сервис для API запросов
import './Modal.css';

const Modal = ({ isOpen, onClose, post, onSave }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
  });

  // Заполняем форму данными семинара, когда модальное окно открывается
  useEffect(() => {
    if (isOpen && post) {
      setFormData({
        title: post.title || "",
        description: post.description || "",
        date: post.date || "",
        time: post.time || "",
      });
    }
  }, [isOpen, post]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Отправляем запрос на сервер для обновления данных семинара
      await PostService.updateSeminar(post.id, formData);
      onSave(formData); // Передаем обновленные данные в родительский компонент
      onClose(); // Закрываем модальное окно
    } catch (error) {
      console.error("Ошибка при обновлении семинара", error);
    }
  };

  if (!isOpen) return null; // Если модальное окно не открыто, не рендерим его

  return (
      <div className="modal">
        <div className="modal__content">
          <h2>Редактировать семинар</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Название:
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </label>
            <label>
              Описание:
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </label>
            <label>
              Дата:
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
            </label>
            <label>
              Время:
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
              />
            </label>
            <div className="modal__buttons">
              <MyButton type="submit">Сохранить изменения</MyButton>
              <MyButton onClick={onClose}>Закрыть</MyButton>
            </div>
          </form>
        </div>
      </div>

  );
};

export default Modal;
