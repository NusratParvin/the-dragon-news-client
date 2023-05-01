import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import EditorsInsight from '../EditorsInsight/EditorsInsight';

const News = () => {

    const news = useLoaderData()
    const { title, details, image_url, author, total_view, category_id } = news;

    return (
        <div>
             <Card>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {details}
                </Card.Text>
                <Link to={`/category/${category_id}`}>

                    <Button variant="danger"><FaArrowLeft className='me-2' ></FaArrowLeft>
                        All news in this category</Button>
                </Link>
            </Card.Body>
        </Card>

        <EditorsInsight></EditorsInsight>
        </div>
       
    );
};

export default News;