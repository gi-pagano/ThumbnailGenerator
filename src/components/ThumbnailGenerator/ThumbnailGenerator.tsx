
import { Container, UploadContainer, UploadDiv, ImageThumbnail, Btn, DivImg } from './ThumbnailGenerator.styles';
import React, { useState } from 'react';
import { CircularProgressSpinner } from '../spinner/Spinner';

export const ThumbnailGenerator: React.FC = () => {
    
    const [images, setImages] = useState<object>([]);
    const [isUploaded, setIsUploaded] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);


    function handleImageChange (e: React.ChangeEvent<HTMLInputElement>) {
        setIsLoading(true);
        setTimeout(() => {
        if (e.target.files && e.target.files[0] && e.target.files[0].size < 5000000) {
        setError(false);  
        setIsLoading(false); 
        let reader = new FileReader();
            reader.onload = (e: any) => {
                setIsUploaded(true);
                let imagesArray = [{img:e.target.result, key: 1}, {img:e.target.result, key: 2}, {img:e.target.result, key: 3}];
                setImages(imagesArray);
            }
            reader.readAsDataURL(e.target.files[0]);
        }
        else {
            setError(true);
            setIsLoading(false);
        }
    },1000);
    }

    const renderImages = (source: any) => {
        return source.map((img: any) => {
            return <ImageThumbnail key={img.key}>
                    <img className={ `userImage${img.key}` } draggable="false" src={img.img} alt={`Imagen de usuario ${img.key}`} />
                </ImageThumbnail>
            }
        )
    }


    return (

        <Container>
            <h2>Subí una imagen</h2>
            <p>Y generá miniaturas</p>
            <UploadContainer>
                {(error && <p className='warning'>Solo imágenes menores a 5mb</p>)}
                <UploadDiv> {
                    isLoading ? <CircularProgressSpinner />  
                    :
                        !isUploaded ? ( 
                            <>
                                <label htmlFor='open'>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Icons8_flat_folder.svg/1200px-Icons8_flat_folder.svg.png" draggable="false" alt="carpeta" width={100}/>
                                <p>Clickeá para subir una imagen (.jpeg o .png)</p>
                                </label>
                                <input id="open" type="file" accept='.jpeg, .png' onChange={handleImageChange} />
                            </>
                        ) : (
                                <DivImg>
                                    <>
                                    {renderImages(images)}
                                    <Btn className="btn" 
                                    onClick={()=> {setIsUploaded(false)  
                                                } }>
                                        Eliminar imágenes
                                    </Btn>
                                    </>
                                </DivImg>
                            ) 
                }
                </UploadDiv>
            </UploadContainer>
        </Container>
    )  
};

    export default ThumbnailGenerator;