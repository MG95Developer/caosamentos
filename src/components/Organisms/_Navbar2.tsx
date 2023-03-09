import { Box, HStack, } from '@chakra-ui/react'
import Link from 'next/link'

// custom components
import NavbarLink from '../Atoms/NavbarLink'


export default function Navbar2() {
    return (
        <>
        <Box mb={6} bg='gray.300' minHeight='90px' display='flex' alignItems='center'>
            <HStack>
                <Link href='/'>
                    <NavbarLink  title='Home'/>
                </Link>
            
                <Link href='/patudos' >
                    <NavbarLink  title='Patudos'/>
                </Link>
            
                <Link href='/racas' >
                    <NavbarLink  title='Raças'/>
                </Link>
            
                <Link href='/saude' >
                    <NavbarLink  title='Saúde'/>
                </Link>
            
                <Link href='/servicos' >
                    <NavbarLink  title='Serviços'/>
                </Link>
            
                <Link href='/blog' >
                    <NavbarLink  title='Blog'/>
                </Link>
            </HStack>
            </Box></>
    )
}








