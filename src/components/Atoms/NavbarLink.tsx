// ATOM

import { Text } from '@chakra-ui/react'

export default function NavbarLink(props: { title: string }) {
    return (
        <Text mr={4}>
            {props.title}
        </Text>
    )
}