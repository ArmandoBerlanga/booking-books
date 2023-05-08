import { Book } from '../models/IndexPage';

const books: Book[] = [
    {
        id: 1,
        title: 'The Cat in the Hat',
        cover: 'cover1.jpeg',
        puntuation: 4.5,
        author: 'Dr. Seuss',
        tags: ['children', 'funny'],
        price: 230.99,
        description: 'A classic children\'s book about two mischievous siblings, Sally and her brother, who get into all sorts of trouble with a tall, mischievous, and magical cat wearing a red and white-striped hat.'
    },
    {
        id: 2,
        title: 'Moon',
        cover: 'cover2.jpeg',
        puntuation: 5,
        author: 'Oliver Jeffers',
        tags: ['infantil', 'risa'],
        price: 312.99,
        description: 'A heartwarming children\'s book about a girl who goes on an adventure to save the moon after it falls from the sky and gets stuck in a tree.'
    },
    {
        id: 3,
        title: 'The Girl in Red',
        cover: 'cover3.jpeg',
        puntuation: 4,
        author: 'Christina Henry',
        tags: ['horror', 'thriller'],
        price: 224.99,
        description: 'A suspenseful retelling of the classic Little Red Riding Hood story, featuring a young woman named Red who must navigate a post-apocalyptic world full of danger and betrayal.'
    },
    {
        id: 4,
        title: 'The arsonist',
        cover: 'cover4.jpeg',
        puntuation: 4.5,
        author: 'Stephanie Oakes',
        tags: ['horror', 'thriller'],
        price: 399.99,
        description: 'A gripping thriller about a young woman named Molly who sets out to uncover the truth about her father, a convicted arsonist, and the secrets he has been keeping from her.'
    },
    {
        id: 5,
        title: 'Harry Potter and the Goblet of Fire',
        cover: 'cover5.jpg',
        puntuation: 4.5,
        author: 'J.K. Rowling',
        tags: ['infanitl', 'sci-fi'],
        price: 299.99,
        description: 'The fourth book in the beloved Harry Potter series, following the young wizard as he competes in the dangerous Triwizard Tournament and uncovers a dark plot against him.'
    },
    {
        id: 6,
        title: 'A short history of Biology',
        cover: 'cover6.jpg',
        puntuation: 3.5,
        author: 'John Gribbin',
        tags: ['ciencia', 'historia'],
        price: 418.99,
        description: 'A fascinating exploration of the history of biology, from the earliest discoveries about the natural world to the cutting-edge research being done today.'
    },
    {
        id: 7,
        title: 'Biology Student book',
        cover: 'cover7.jpg',
        puntuation: 2.5,
        author: 'David Brooker',
        tags: ['ciencia', 'historia'],
        price: 189.50,
        description: 'A comprehensive textbook for students of biology, covering topics such as cell biology, genetics, evolution, and ecology.'
    },
    {
        id: 8,
        title: 'The Invisible Cloud',
        cover: 'cover8.png',
        puntuation: 4.5,
        author: 'Adam Higginbotham',
        tags: ['historia', 'ciencia'],
        price: 299.99,
        description: 'A gripping account of the Chernobyl disaster, from the explosion at the nuclear power plant to the aftermath of the disaster and its impact on the world.'
    },
    {
        id: 9,
        title: 'Español Libro de Lectura',
        cover: 'cover9.png',
        puntuation: 1.5,
        author: 'Luisa Fernanda',
        tags: ['español', 'lectura'],
        price: 249.99,
        description: 'Un libro de lectura para estudiantes de español, que cubre temas como la gramática, la ortografía, y la literatura.'
    },
    {
        id: 10,
        title: 'Econocmics Student Book',
        cover: 'cover10.jpg',
        puntuation: 5,
        author: 'Matthew Taylor',
        tags: ['economia', 'negocios'],
        price: 399.99,
        description: 'A comprehensive textbook for students of economics, covering topics such as microeconomics, macroeconomics, and international trade.'
    }
];

export default books;
