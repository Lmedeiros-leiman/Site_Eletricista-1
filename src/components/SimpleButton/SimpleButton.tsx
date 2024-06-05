import { ReactNode } from "react";


const SimpleButton = (props: {
    children: ReactNode; showArrow: undefined | boolean; href: string; TextclassName:undefined | string; ArrowclassName:undefined | string;
    }) => {

    return (
        <a
            href={props.href}
            className={ "cursor-pointer "+ props.TextclassName ? props.TextclassName : "-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"}

        >
        {props.children}
        { props.showArrow && (
            <span className={ props.ArrowclassName ? props.ArrowclassName : ""} 
                aria-hidden={ !(props.showArrow == true)}>&rarr;</span>)}
        </a>
    )
}

export { SimpleButton }