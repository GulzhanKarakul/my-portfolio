import { Col, Container, Row } from "react-bootstrap";
import headerImg from '../../assets/img/banner-img.png';
import { useEffect, useState } from "react";
import './Banner.css'

export default function Banner() {
    // Инициализация состояний компонента
    const [loopNum, setLoopNum] = useState(0); // Счетчик итераций
    const [isDeleting, setIsDeleting] = useState(false); // Флаг для определения, удаляется ли текст
    const toRotate = ["Web Developer", "JavaScript developer"]; // Массив строк для смены
    const [text, setText] = useState(''); // Текущий отображаемый текст
    const [delta, setDelta] = useState(300 - Math.random() * 100); // Время задержки между символами
    const period = 2000; // Период между сменой строк

    // Хук useEffect позволяет выполнять побочные эффекты в функциональных компонентах. 
    // Побочные эффекты включают в себя такие вещи, как изменение DOM, запросы к серверу, подписка на события и т. д.
    // Он выполняется после каждого рендера компонента.
    // Запуск эффекта при изменении текста
    useEffect(() => {
        let ticker = setInterval(() => {
            tick(); // Вызов функции tick для обновления текста
        }, delta); // Задержка между вызовами функции tick

        // Очистка интервала при размонтировании компонента
        return () => { clearInterval(ticker)};
    }, [text]); // Эффект запускается при изменении текста

    // Функция для обновления текста
    const tick = () => {
        let i = loopNum % toRotate.length; // Определение текущей строки для отображения
        let fullText = toRotate[i]; // Получение полного текста для текущей строки
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1); // Обновление текста в зависимости от флага isDeleting

        setText(updatedText); // Установка нового текста

        // Управление временем задержки между символами в зависимости от удаления текста
        if (isDeleting) setDelta(prevDelta => prevDelta / 2);
        
        // Условие для смены направления изменения текста
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true); // Установка флага удаления текста
            setDelta(period); // Установка задержки на период
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false); // Сброс флага удаления текста
            setLoopNum(loopNum + 1); // Увеличение счетчика итераций
            setDelta(500); // Установка времени задержки между символами
        }
    }

    // Возвращение разметки компонента
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-item-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to My Portfolio</span>
                        <h1>
                            Hi I&apos;m <br /><span className="primary">Karakul Gulzhan </span><br /><span className="wrap">{text}</span><br />
                        </h1>
                        <p>With my expertise in HTML, CSS, JavaScript and React, I strive to create web applications that are not only visually appealing but also excel in functionality.</p>
                    </Col>
                    <Col className="img-filter" xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Image" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}