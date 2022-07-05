import React, {MouseEvent, useState} from "react";
import s from "./paginator.module.css";

export const Paginator = (props: PaginatorPropsType) => {
    let pagesCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    const portionCount = Math.ceil(pagesCount / props.portionSize)
    const [portionNumber, setPortionNumber] = useState<number>(1)
    const leftPortionPageNumber = (portionNumber - 1) * props.pageSize + 1
    const rightPortionPageNumber = portionNumber * props.pageSize

    const prevOnClickHandler = () => {
        setPortionNumber(portionNumber - 1)
    }
    const nextOnClickHandler = () => {
        setPortionNumber(portionNumber + 1)
    }

    return <div className={s.paginator}>
        {portionNumber > 1 && <button onClick={prevOnClickHandler}>PREV</button>}
        {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map(n => {
                let onClickHandler = (e: MouseEvent<HTMLSpanElement>) => {
                    props.onPageChanged(n)
                }
                return <span onClick={onClickHandler}
                             className={props.currentPage === n ? s.selectedPage : ''}>{n} </span>
            })
        }
        {portionCount > portionNumber && <button onClick={nextOnClickHandler}>NEXT</button>}
    </div>
}

//types
type PaginatorPropsType = {
    pageSize: number
    totalCount: number
    currentPage: number
    onPageChanged: (currentPage: number) => void
    portionSize: number
}