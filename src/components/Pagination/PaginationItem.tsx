import { Button } from '@chakra-ui/react'

interface PaginationItemProps {
    number: number;
    isCurrency?: boolean;
}

export function PaginationItem({ isCurrency = false, number }: PaginationItemProps) {
    if (isCurrency) {
        return (
            <Button
                size="sm"
                fontSize="sx"
                width="4"
                colorScheme="pink"
                disabled
                _disabled={{
                    bg: 'pink.500',
                    cursor: 'default'
                }}
            >
                {number}
            </Button>
        )
    };
    return (
        <Button
            size="sm"
            fontSize="sx"
            width="4"
            colorScheme="gray.700"
            _hover={{
                bg: 'gray.500',
            }}
        >
            {number}
        </Button>
    )
}