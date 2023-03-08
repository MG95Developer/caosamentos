import { AbsoluteCenter, Text, Box, HStack } from "@chakra-ui/react";
import Link from "next/link";
import {ChevronLeftIcon} from '@chakra-ui/icons'


export default function PageNotFound() {
    return (
        <>
        <Box position='relative' h='100vh'>
            <AbsoluteCenter axis='both'>
                    <Text fontSize='2xl' my={4} fontWeight='900'>Page Not Found!</Text>
                    <Link href="/">
                        <HStack>
                            <ChevronLeftIcon/>
                            <Text as="span">Back to Homepage</Text>
                        </HStack>
                    </Link>
            </AbsoluteCenter>
        </Box>
        </>
    )
}