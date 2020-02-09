import React,{useState} from 'react';
import ImgCardSlide from '../components/ImgCardSlide';
import {
    Carousel,
    CarouselItem,
    CarouselIndicators,
} from 'reactstrap';
import { createUseStyles } from 'react-jss';
import uuid from 'uuid';

import SignupPageImg from '../images/signupPageImg.png';
import SignupPageImg1 from '../images/SignupPageImg1.png';
import SignupPageImg2 from '../images/signupPageImg2.png';

const useStyles = createUseStyles({
    caroIndi: {
        '& li': {
            backgroundColor: '#e1e1e1',
            height: '0.6rem',
            width: '0.6rem',
            borderRadius: '50%'
        },
        '& li.active': {
            backgroundColor: '#89ade3'
        }
    },

})

const SignUpLoginCrousel = ({ items, itemsBgCol }) => {
    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
      }
    
      const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
      }
    
      const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
      }
    
      const slides = items.map((item) => {
        return (
          <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.key}
          >
             <ImgCardSlide style={{
               bg: item.imgBg,
               height: '35rem'
                }}
               item={item}/>
          </CarouselItem>
        );
      });

    const classes = useStyles(itemsBgCol);

     const [activeIndex, setActiveIndex] = useState(0);
     const [animating, setAnimating] = useState(false);
    return (
        <div>
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
                interval='3500'
                ride='carousel'
        
                >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} className={classes.caroIndi}/>
                {slides}
            </Carousel>
        </div>
    );
}


SignUpLoginCrousel.defaultProps = {
    items: [{
            img: SignupPageImg,
            title: 'Ask your Questions',
            sub: 'An ecosystem built for you to ask questions, seek knowledge, and grow a network.',
            imgBg: 'linear-gradient(10deg, #ffffff 0%, #c8baff 100%)',
            key: uuid()
        },
        {
            img: SignupPageImg2,
            title: 'Get In-Touch with Mentors',
            sub: 'Connect with mentors and get unique insights and dig deep into topics you like to explore.',
            imgBg: 'linear-gradient(10deg, #ffffff 0%, #bed6ff 100%)',
            key: uuid()
        },
        {
            img: SignupPageImg1,
            title: 'Customize your Feed',
            sub: 'Follow topics and threads for which you have been seeking answers. Join our community to interact with people.',
            imgBg: 'linear-gradient(10deg, #ffffff 0%, #c68fa7 100%)',
            key: uuid()
        }
    ],
}

export default SignUpLoginCrousel;