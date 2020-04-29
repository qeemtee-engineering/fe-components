import React, { FC, useState, useEffect } from 'react';
import './Carousel.scss';
import { withNaming } from '@bem-react/classname';
import Icon from '../Icon';
import cs from 'classnames';

const cn = withNaming({ e: '__', m: '--' })('Carousel');

interface ICarouselProps {
  images: string[];
  autoPlay?: boolean;
  autoPlayDuration?: number;
  startIndex?: number;
  showDots?: boolean;
  disableArrow?: boolean;
  captions?: string[];
}

const Carousel: FC<ICarouselProps> = props => {
  const [active, setActive] = useState(props.startIndex || 0);
  const [seconds, setSeconds] = useState(0);
  const [isAuto, setAuto] = useState(props.autoPlay);
  const goNext = () => {
    setSeconds(0);
    if (props.images[active + 1]) {
      return setActive(a => a + 1);
    }
    return setActive(0);
  };

  useEffect(() => {
    if (isAuto) {
      const autoPlayDuration = props.autoPlayDuration || 5;
      const interval = setInterval(() => {
        if (seconds <= autoPlayDuration) {
          setSeconds(s => s + 1);
        }
      }, 1000);

      if (seconds === autoPlayDuration) {
        goNext();
      }
      return () => {
        clearInterval(interval);
      };
    }
  }, [seconds, props.autoPlayDuration, isAuto]);

  const goPrev = () => {
    setSeconds(0);
    if (props.images[active - 1]) {
      return setActive(a => a - 1);
    }
    return setActive(props.images.length - 1);
  };

  const gotoActive = (i: number) => () => {
    setSeconds(0);
    setActive(i);
  };

  const getClass = (i: number) => {
    if (i < active) {
      return cn('control__data__complete');
    } else if (i > active) {
      return cn('control__data__incomplete');
    } else {
      return cs(cn('control__data__active'), { 'Carousel__control__data__active--stop': !isAuto });
    }
  };

  return (
    <div className={cn()}>
      {props.images.length > 1 && (
        <>
          {!props.showDots && (
            <div className={cn('pause-play')}>
              {isAuto ? (
                <Icon onClick={() => setAuto(false)} icon="pause_circle_outline" />
              ) : (
                <Icon onClick={() => setAuto(true)} icon="play_circle_outline" />
              )}
            </div>
          )}
          {!props.disableArrow && (
            <>
              <a
                onClick={goPrev}
                style={{ display: props.images.length ? 'flex' : 'none' }}
                className={cn('button', { left: true })}
              >
                <Icon icon="keyboard_arrow_left" />
              </a>
              <a
                onClick={goNext}
                style={{ display: props.images.length ? 'flex' : 'none' }}
                className={cn('button', { right: true })}
              >
                <Icon icon="keyboard_arrow_right" />
              </a>
            </>
          )}
          {!props.showDots && (
            <div className={cn('control')}>
              {Array(props.images.length)
                .fill(0)
                .map((_, i) => (
                  <div onClick={gotoActive(i)} key={i} className={cn('control__data')}>
                    <div
                      className={getClass(i)}
                      style={{
                        animationDuration: i === active ? `${props.autoPlayDuration}s` : '',
                      }}
                    />
                  </div>
                ))}
            </div>
          )}
          {props.showDots && (
            <div className={cn('dots')}>
              {Array(props.images.length)
                .fill(0)
                .map((_, i) => (
                  <div
                    onClick={() => setActive(i)}
                    className={cn('dots-item', { active: i === active })}
                  ></div>
                ))}
            </div>
          )}
        </>
      )}
      <div className={cn('wrapper')}>
        <ul
          style={{ transform: `translate3d(${-active * 100}%, 0px, 0px)` }}
          className={cn('slider')}
        >
          {props.images.map((img, i) => (
            <li className={cn('slide', { selected: active === i })} key={i}>
              <img src={img} />
            </li>
          ))}
        </ul>
      </div>
      <div className={cn('caption')}>
        <p>{props.captions![active]}</p>
      </div>
    </div>
  );
};

Carousel.defaultProps = {
  autoPlay: true,
  autoPlayDuration: 8,
  startIndex: 0,
};

export default Carousel;
