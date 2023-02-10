import {useState} from 'react';
import styles from './rating/Rating.module.css';

export function Rating(){
    const [selectedRating, setSelectedRating] = useState<number>();
    const [isSubmitted, setIsSubmitted] = useState(false);

    function handleRatingClicked(rating:number){
        setSelectedRating(rating);
    }

    function handleFormSubmitted(e:React.FormEvent){
        e.preventDefault();
        setIsSubmitted(true);
    }

    return isSubmitted ? (
        <div className={styles.thanks}><img className={styles.delivered} src='/business.jpg'/>
            <p className={styles.selected}>You selected {selectedRating} out of 5</p>

            <h1 className={styles.title}>Thank You!</h1>

            <p className={styles.description}>We appreciate you taking the time to give a rating. If you ever need mpre support, don't hesitate to get in touch!</p>

        </div>

        
    ):(
    <form onSubmit={handleFormSubmitted}className ={styles.panel}>
        <img className={styles.star} src="/icons8-star.png"/>

        <h1 className={styles.title}>How did we do?</h1>

        <p className={styles.description}>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>

        <div className={styles.group}>
            {[1,2,3,4,5].map((rating)=>(
                <button 
                type='button'
                onClick={()=> handleRatingClicked(rating)}
                className={styles.rating}
                >
                    {rating}
                </button>
            ))}
        </div>

       <button disabled={selectedRating === undefined} className={styles.submit}>Submit</button>
    </form>
    )
}