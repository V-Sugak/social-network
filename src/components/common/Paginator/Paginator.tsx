import React, {MouseEvent} from "react";
import s from "./paginator.module.css";

export const Paginator = (props: PaginatorPropsType) => {
    let pagesCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div>
        {pages.map(n => {
            let onClickHandler = (e: MouseEvent<HTMLSpanElement>) => {
                props.onPageChanged(n)
            }
            return <span onClick={onClickHandler}
                         className={props.currentPage === n ? s.userPage : ''}>{n} </span>
        })}
    </div>
}

//types
type PaginatorPropsType = {
    pageSize: number
    totalCount: number
    currentPage: number
    onPageChanged: (currentPage: number) => void
}