import { useEffect, useState } from 'react';
import './Blog.css'
import Details from './Details';


const Blog = () => {
    const [data, setData] = useState([]);

    // console.log(data)

    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setData(data))
    }, [])
    return (
        <div className="container">
            <h1>This is Blog</h1>
            <div className='blog'>
                <div>
                    <h3>HTML 15 Questions and Answers</h3>
                    <div className='question'>
                        {
                            data?.map((item, index) => <Details 
                            key={index}
                            items={item}
                            ></Details>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;