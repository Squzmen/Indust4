// App.jsx
import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [nicknames, setNicknames] = useState([]);
  const [count, setCount] = useState(1);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [fallingNicknames, setFallingNicknames] = useState([]);

  const russianNames = [
    'Вова', 'Серёга', 'Дима', 'Пашка', 'Макс', 'Витя', 'Саня', 'Лёха', 
    'Коля', 'Петя', 'Вася', 'Стёпа', 'Артём', 'Борис', 'Глеб', 'Женя',
    'Игорь', 'Костя', 'Леня', 'Миша', 'Олег', 'Рома', 'Слава', 'Толя',
    'Федя', 'Юра', 'Ярик', 'Антон', 'Гена', 'Данила', 'Ефим', 'Жора',
    'Кирилл', 'Матвей', 'Никита', 'Павел', 'Руслан', 'Семён', 'Тимур',
    'Фёдор', 'Владик', 'Гриша', 'Денис', 'Егор', 'Захар', 'Илья', 'Кеша',
    'Лёва', 'Марат', 'Назар', 'Осип', 'Прохор', 'Ринат', 'Савва', 'Тарас',
    'Филипп', 'Харитон', 'Шурик', 'Аркадий', 'Богдан', 'Вадим', 'Геннадий',
    'Давид', 'Ермак', 'Жека', 'Иван', 'Кузьма', 'Лазарь', 'Максимка', 'Ник',
    'Пётр', 'Ростик', 'Сергей', 'Тимофей', 'Устин'
  ];

  const englishNames = [
    'Джон', 'Майк', 'Боб', 'Том', 'Джек', 'Стив', 'Дэйв', 'Крис',
    'Пол', 'Марк', 'Брайан', 'Кевин', 'Джеймс', 'Роб', 'Тони',
    'Билл', 'Фрэнк', 'Рик', 'Дэн', 'Лео', 'Скотт', 'Адам', 'Карл',
    'Нейт', 'Грег'
  ];

  const suffixes = [
    'Гордый', 'Тихий', 'Дикий', 'Злой', 'Добрый', 'Быстрый', 'Медленный',
    'Жирный', 'Тощий', 'Рыжий', 'Лысый', 'Бородач', 'Шептун', 'Крикун',
    'Ёбарь', 'Пиздюк', 'Хуесос', 'Долбоёб', 'Мудак', 'Пидор', 'Хитрожопый',
    'Ебанутый', 'Охуенный', 'Заебистый', 'Пиздатый', 'Ублюдок', 'Мудила',
    'Хитрожоп', 'Збс', 'Въебщик', 'Пиздец', 'Нахуй', 'Ахуенный', 'Заебца',
    'Пидрила', 'Хуяк', 'Ебашит', 'Пиздюлина', 'Охуительный', 'Заебок',
    'Волк', 'Ворон', 'Лис', 'Барсук', 'Кабан', 'Снайпер', 'Охотник',
    'Одинокий', 'Мёртвый', 'Живой', 'Проклятый', 'Удачливый', 'Хромой',
    'Косой', 'Слепой', 'Бешеный', 'Спокойный', 'Громкий', 'Молчун',
    'Танцор', 'Копатель', 'Торгаш', 'Барыга', 'Жмот', 'Щедрый', 'Жадный',
    'Хитрый', 'Глупый', 'Умный', 'Пьяный', 'Трезвый', 'Курильщик', 'Чистый',
    'Грязный', 'Вонючий', 'Душистый', 'Красавчик', 'Урод', 'Калека',
    'Здоровяк', 'Качок', 'Дрыщ', 'Гигант', 'Карлик', 'Командир', 'Рядовой',
    'Майор', 'Сержант', 'Капитан', 'Полковник', 'Генерал', 'Босс', 'Вождь',
    'Король', 'Шут', 'Клоун', 'Псих', 'Маньяк', 'Убийца', 'Предатель', 'Герой'
  ];

  const specialChars = ['☢', '×', '†', '★', '◊', '»', '«', '~', '-', '_', '•', '▪', '▫'];

const generateNickname = () => {
  const allNames = [...russianNames, ...englishNames];
  const name = allNames[Math.floor(Math.random() * allNames.length)];
  const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
  
  let nickname = `${name} ${suffix}`;
  
  if (Math.random() < 0.3) {
    const char = specialChars[Math.floor(Math.random() * specialChars.length)];
    nickname = `${char}${nickname}${char}`;
  }
  
  if (Math.random() < 0.3) {
    const num = Math.floor(Math.random() * 999);
    nickname += num;
  }
  
  return nickname;
};


  // Генерация падающих никнеймов для фона
  useEffect(() => {
    const createFallingNickname = () => {
      const nickname = generateNickname();
      const id = Date.now() + Math.random();
      const left = Math.random() * 100;
      const duration = 8 + Math.random() * 7; // 8-15 секунд
      const delay = Math.random() * 2;
      const fontSize = 0.8 + Math.random() * 0.9; // 0.8-1.2rem
      
      return {
        id,
        text: nickname,
        left: `${left}%`,
        duration: `${duration}s`,
        delay: `${delay}s`,
        fontSize: `${fontSize}rem`
      };
    };

    // Создаём начальный набор падающих никнеймов
    const initialNicknames = Array.from({ length: 15 }, createFallingNickname);
    setFallingNicknames(initialNicknames);

    // Добавляем новые никнеймы периодически
    const interval = setInterval(() => {
      setFallingNicknames(prev => {
        const newNickname = createFallingNickname();
        return [...prev.slice(-14), newNickname]; // Держим максимум 15 никнеймов
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleGenerate = () => {
    const newNicknames = [];
    for (let i = 0; i < count; i++) {
      newNicknames.push(generateNickname());
    }
    setNicknames(newNicknames);
    setCopiedIndex(null);
  };

  const copyToClipboard = (nickname, index) => {
    navigator.clipboard.writeText(nickname);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="app">
      {/* Падающие никнеймы на фоне */}
      <div className="falling-background">
        {fallingNicknames.map((item) => (
          <div
            key={item.id}
            className="falling-nickname"
            style={{
              left: item.left,
              animationDuration: item.duration,
              animationDelay: item.delay,
              fontSize: item.fontSize
            }}
          >
            {item.text}
          </div>
        ))}
      </div>

      <div className="container">
        <div className="header">
          <h1 className="title">☢ ГЕНЕРАТОР НИКНЕЙМОВ ☢</h1>
          <p className="subtitle">Создай свой уникальный ник</p>
        </div>

        <div className="controls">
          <select 
            value={count} 
            onChange={(e) => setCount(Number(e.target.value))}
            className="select"
          >
            {[1, 3, 5, 10, 15, 20].map(num => (
              <option key={num} value={num}>{num} {num === 1 ? 'ник' : 'ника'}</option>
            ))}
          </select>
          
          <button onClick={handleGenerate} className="generate-btn">
            ГЕНЕРИРОВАТЬ
          </button>
        </div>

        {nicknames.length > 0 && (
          <div className="nicknames-list">
            {nicknames.map((nickname, index) => (
              <div key={index} className="nickname-item">
                <span className="nickname-text">{nickname}</span>
                <button 
                  onClick={() => copyToClipboard(nickname, index)}
                  className="copy-btn"
                >
                  {copiedIndex === index ? '✓ СКОПИРОВАНО' : 'КОПИРОВАТЬ'}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
