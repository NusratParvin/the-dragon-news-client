import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import moment from 'moment';
import { BsBookmark, BsShare } from 'react-icons/bs';
import { AiOutlineEye } from 'react-icons/ai';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';



const NewsCard = ({ news }) => {
    const { image_url, title, details, _id, author, total_view, rating } = news;
    return (

        <Card className=" mb-4">
            <Card.Header className='d-flex align-items-center gap-2'>
                <Image style={{ height: '40px' }} src={author?.img} roundedCircle />

                <div className='ps-2 flex-grow-1'>
                    <p className='mb-0'>{author?.name}</p>
                    <p><small>{moment(author?.published_date).format('yyyy-MM-DD')}</small></p>
                </div>

                <div>
                    <BsBookmark></BsBookmark>
                    <BsShare></BsShare>
                </div>

            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant='top' src={image_url}></Card.Img>
                <Card.Text>{details.length < 250 ? <>{details}</>
                    :
                    <>
                        {details.slice(0, 250)}...
                        <br />
                        <Link to={`/news/${_id}`}>Read More</Link>
                    </>
                }
                </Card.Text>

            </Card.Body>
            <Card.Footer className="text-muted d-flex">
                <div className='flex-grow-1'>
                    <Rating
                        placeholderRating={rating?.number}
                        readonly
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                        fullSymbol={<FaStar></FaStar> }></Rating>
                    <span>{rating?.number}</span>
                </div>
                <div><AiOutlineEye></AiOutlineEye>{total_view}</div>

            </Card.Footer>
        </Card>


    );
};

export default NewsCard;