import Link, { LinkProps } from 'next/link'
import { cloneElement, ReactElement } from 'react'

import { useRouter } from 'next/router'

interface ActiveLinkProps extends LinkProps {
    children: ReactElement;
    sholdMathExectHref?: boolean;
}

export function ActiveLink({ children, sholdMathExectHref,  ...rest }: ActiveLinkProps) {
    const { asPath } = useRouter();
    let isActive = false;

    if( sholdMathExectHref && (asPath === rest.href || asPath === rest.as)) {
        isActive = true;
    }

    if (!sholdMathExectHref && (asPath.startsWith(String(rest.href)) ||  asPath.startsWith(String(rest.as)))) {
        isActive: true;
    }
    
    return(
        <Link {...rest}>
            {cloneElement(children, {
                color: isActive ? 'pink.400' : 'gray.50'
            }) }
        </Link>
    )
}