import React, { useState, useEffect, useRef } from 'react';
import instance from '../api/axios';
import './Photos.css';
const Photos = () => {

    const [photos, setPhotos] = useState([]);
    const pexelImgWrapper = useRef();
    const modal = useRef();
    const zoomedImd = useRef();

    useEffect(() => {
        instance.get()
            .then(response => setPhotos(response.data.photos))
            .catch(err => console.error(err))
    }, [])

    function chosenPhoto(link) {
        modal.current.classList.remove('d-none')
        zoomedImd.current.setAttribute('src', `${link}`)
    }

    function closeModal() {
        modal.current.classList.add('d-none')
    }

    return (
        <React.Fragment>
            <ul className="photos-list">
                {
                    photos.map(photo => {
                        return <li ref={pexelImgWrapper} key={photo.id} data-imgid={photo.id}>
                            <img src={photo.src.tiny} alt={photo.alt} />
                            <button onClick={() => {
                                chosenPhoto(photo.src.large)
                            }} className="zoom-img-btn">Zoom</button>
                        </li>
                    })
                }
            </ul>
            <div className="modal-wrapper d-none" ref={modal}>
                <img ref={zoomedImd} alt="zoom" />
                <button onClick={closeModal} className="modal-close">Close</button>
            </div>
        </React.Fragment>
    )
}

export default Photos