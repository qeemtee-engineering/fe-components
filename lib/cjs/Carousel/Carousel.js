import React, { useState, useEffect } from 'react';
import './Carousel.css';
import { withNaming } from '@bem-react/classname';
import Icon from '../Icon';
import cs from 'classnames';
const cn = withNaming({ e: '__', m: '--' })('Carousel');
const Carousel = props => {
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
    const gotoActive = (i) => () => {
        setSeconds(0);
        setActive(i);
    };
    const getClass = (i) => {
        if (i < active) {
            return cn('control__data__complete');
        }
        else if (i > active) {
            return cn('control__data__incomplete');
        }
        else {
            return cs(cn('control__data__active'), { 'Carousel__control__data__active--stop': !isAuto });
        }
    };
    return (React.createElement("div", { className: cn() },
        props.images.length > 1 && (React.createElement(React.Fragment, null,
            !props.showDots && (React.createElement("div", { className: cn('pause-play') }, isAuto ? (React.createElement(Icon, { onClick: () => setAuto(false), icon: "pause_circle_outline" })) : (React.createElement(Icon, { onClick: () => setAuto(true), icon: "play_circle_outline" })))),
            !props.disableArrow && (React.createElement(React.Fragment, null,
                React.createElement("a", { onClick: goPrev, style: { display: props.images.length ? 'flex' : 'none' }, className: cn('button', { left: true }) },
                    React.createElement(Icon, { icon: "keyboard_arrow_left" })),
                React.createElement("a", { onClick: goNext, style: { display: props.images.length ? 'flex' : 'none' }, className: cn('button', { right: true }) },
                    React.createElement(Icon, { icon: "keyboard_arrow_right" })))),
            !props.showDots && (React.createElement("div", { className: cn('control') }, Array(props.images.length)
                .fill(0)
                .map((_, i) => (React.createElement("div", { onClick: gotoActive(i), key: i, className: cn('control__data') },
                React.createElement("div", { className: getClass(i), style: {
                        animationDuration: i === active ? `${props.autoPlayDuration}s` : '',
                    } })))))),
            props.showDots && (React.createElement("div", { className: cn('dots') }, Array(props.images.length)
                .fill(0)
                .map((_, i) => (React.createElement("div", { onClick: () => setActive(i), className: cn('dots-item', { active: i === active }) }))))))),
        React.createElement("div", { className: cn('wrapper') },
            React.createElement("ul", { style: { transform: `translate3d(${-active * 100}%, 0px, 0px)` }, className: cn('slider') }, props.images.map((img, i) => (React.createElement("li", { className: cn('slide', { selected: active === i }), key: i },
                React.createElement("img", { src: img })))))),
        React.createElement("div", { className: cn('caption') },
            React.createElement("p", null, props.captions[active]))));
};
Carousel.defaultProps = {
    autoPlay: true,
    autoPlayDuration: 8,
    startIndex: 0,
};
export default Carousel;
//# sourceMappingURL=Carousel.js.map