import { useEffect, useState } from 'react';

const useComments = (url) => {

    const [data, setData] = useState(null);
    const [isLoadin, setIsLoadin] = useState(true);
    const [errorr, setErrorr] = useState(null);

    useEffect( () => {
        setTimeout( () => {
            fetch(url)
                .then( res => {
                    if(!res.ok){
                    throw Error('Could not fetch the desired data!!!')  
                    }           
                    return res.json();                   
                })
                .then( data => {
                    console.log(data)
                    setData(data);
                    setIsLoadin(false);
                })
                .catch( err => {
                    setIsLoadin(false);
                    setErrorr(err.message);
            });
        }, 1000
        )
    }, [url])

    return(
        { errorr, isLoadin,  data }
        // {  data }
    )
}

export default useComments;