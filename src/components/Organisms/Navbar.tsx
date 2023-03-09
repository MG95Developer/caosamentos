import {
    Box,
    Flex,
    Text,
    IconButton,
    Stack,
    Collapse,
    Link,
    Popover,
    PopoverTrigger,
    useColorModeValue,
    useDisclosure,
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon
} from '@chakra-ui/icons';
  
import Image from 'next/image';
  
  
export default function Navbar() {
      
    const { isOpen, onToggle } = useDisclosure();

      const linkStyles = {
        textDecoration: 'none !important'
      }
  
    return (
      <Box>
        <Flex
            bg='gray.300'
            color={useColorModeValue('gray.600', 'white')}
            py={{ base: 2 }}
                px={{ base: 4 }}
                minHeight={{base: '80px', md:'100px'}}
            align={'center'}
        >
                
                <Flex
            flex={{ base: 0 }}
            ml={{ base: -2 }}
            display={{ base: 'flex', lg: 'none' }}
        >
            <IconButton
                onClick={onToggle}
                icon={
                    isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                }
                variant={'ghost'}
                aria-label={'Toggle Navigation'}
            />
        </Flex>
                
            <Flex flex={{ base: 1}} justify={{ base: 'center', md: 'start' }}>
                <Box flex={{ base: 2}} display={{ base: 'none', lg: 'flex' }}>
                    <DesktopNav />
                </Box>
                    
                <Box flex={{ base: 1}} display={{ base: 'flex' }} justifyContent='flex-end' mr={{base: 5, md: 14}} pr={0}>
                   
                    <Link href='/404' sx={linkStyles}>
                        <Box mr={{base: 6, md: 12}}>ÁREA PESSOAL</Box>
                        <Box mt='-10' display='flex' justifyContent='center' alignItems='center' ml={16}>
                            <Text display='flex' justifyContent='center' alignItems='center' bg='red'color='white' w='20px' h='20px' borderRadius='50%' fontWeight='600'>5</Text>
                        </Box>
                    </Link>
                       
                    <Link href='/404' sx={linkStyles}>
                        <Box>ENGLISH</Box>
                    </Link>
                </Box>
            </Flex>
                
            <Stack
                justify={'flex-end'}
                direction={'row'}
                >
                <Link href='/'>
                    <Image
                        width={50}
                        height={50}
                        src='/images/logotype.webp' alt='caosamentos logotype'
                    />
                </Link>
            </Stack>
                
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
            
      </Box>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
  
    return (
      <Stack direction={'row'} spacing={4}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'} >
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  {navItem.label}
                </Link>
              </PopoverTrigger>
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };

  const MobileNav = () => {
    return (
      <Stack
        bg='gray.300'
        p={4}
        display={{ lg: 'none' }}

        >
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem  key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label,  href }: NavItem) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color='#4a5568'
            >
            {label}
          </Text>
      
        </Flex>
  

      </Stack>
    );
  };
  
  interface NavItem {
    label: string;
    subLabel?: string;
    href?: string;
  }
  
  const NAV_ITEMS: Array<NavItem> = [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Patudos',
      href: '/patudos',
    },
    {
      label: 'Raças',
      href: '/racas',
    },
    {
      label: 'Saúde',
      href: '/saude',
    },
    {
      label: 'Serviços',
      href: '/servicos',
    },
    {
      label: 'Blog',
      href: '/blog',
    },
  ];