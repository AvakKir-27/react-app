import { useState } from "react";
import { useUser } from "../context/UserContext";
import { useRef } from "react";

function Settings() {
    const { userName, setUserName, avatar, setAvatar } = useUser();

    const [error, setError] = useState("");
    const fileInputRef = useRef();

    function handlerAvatarChange(event) {
        const file = event.target.files[0];
        if(!file) {return;}
        if(!file.type.startsWith('image/')) {
            setError("Выберите файл изображения");
            event.target.value = "";
            return;
        }
        if(!file.size > 1024 * 1024) {
            setError("Размер изображения не должен превышать 1МБ");
            event.target.value = "";
            return;
        }
        const reader = new FileReader();
        reader.onload = () => {
            setAvatar(reader.result);
            setError("");
        }
        reader.onerror = () => {
            setError("Не удалось прочитать изображение");
        }
        reader.readAsDataURL(file);
    }

    function removeAvatar() {
        setAvatar("");
        setError("");
        if(fileInputRef.current) {
            fileInputRef.current.value = "";
        }    
    }

    return (
        <section className="page">
            <h1>Настройки</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quis suscipit, eos iure iusto sapiente accusamus aspernatur autem hic non ratione iste eligendi!</p>
            <div className="settings-avatar">
                {avatar ? (
                    <img src={avatar} alt="Аватар" className="avatar-preview" />
                ) : (
                    <div className="avatar-placeholder">
                        {userName.charAt(0).toUpperCase() || "?"}
                    </div>
                )}
                <div className="avatar-controls">
                    <h2>Фото профиля</h2>
                    <input ref={fileInputRef} 
                    type="file" 
                    accept="image/" 
                    onChange={handlerAvatarChange} />
                    
                    <p>Изображение до 1МБ</p>
                    {avatar && (
                        <button type="button" onClick={removeAvatar}>
                            Удалить фотографию
                        </button>
                    )}
                </div>
            </div>

            {error && (
                <p className="form-error">{error}</p>
            )}
            <label>
                Имя пользователя:    
                <input type="text" 
                value={userName} 
                onChange={(event) => {
                    setUserName(event.target.value)
                }} />
            </label>
            <p>Установите имя: {userName}</p>
        </section>
    );
}

export default Settings;