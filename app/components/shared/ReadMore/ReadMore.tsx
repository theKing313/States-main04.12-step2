import classNames from "classnames/bind";
import styles from './ReadMore.module.scss'
import React, { useState } from "react";
interface Props {
    children?: string
}
const cx = classNames.bind(styles)
const ReadMore = ({ children }: Props) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <div className="text">
            {isReadMore ? text?.slice(0, 300) + '...' : text}
            <div
                onClick={toggleReadMore}
                className={cx("read-or-hide")}

            >
                {isReadMore ? "read more" : " show less"}
            </div>
        </div>
    );
};
export { ReadMore }
