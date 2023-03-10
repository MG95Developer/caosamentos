import {
	Box,
	Button,
	Container,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	Flex,
	HStack,
	IconButton,
	Tab,
	TabIndicator,
	TabList,
	Tabs,
	Text,
	useBreakpointValue,
	useDisclosure,
	VStack,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRef } from 'react';
import { FiMenu } from 'react-icons/fi';
import Logotype from '../Atoms/Logotype';

export const Navbar = () => {
	const isDesktop = useBreakpointValue({
		base: false,
		sm: false,
		md: false,
		lg: true,
	});
	const { isOpen, onOpen, onClose } = useDisclosure();
	const menuButtonRef = useRef<HTMLButtonElement>(null);
	return (
		<Box as="nav" zIndex="10" role="navigation" bg="gray.300">
			<Container maxWidth="lx" py={{ base: '2', lg: '4' }}>
				<HStack spacing="10" justify="space-between">
					{isDesktop ? (
						<Flex justify="space-between" flex="1">
							<Tabs
								isFitted
								variant="unstyled"
								display="flex"
								justifyContent="center"
								alignItems="center"
							>
								<TabList zIndex="modal">
									<Link href="/" style={{ zIndex: '10' }}>
										<Tab color="black" fontSize="lg">
											Home
										</Tab>
									</Link>

									<Link href="/patudos" style={{ zIndex: '10' }}>
										<Tab color="black" fontSize="lg">
											Patudos
										</Tab>
									</Link>
									<Link href="/racas" style={{ zIndex: '10' }}>
										<Tab color="black" fontSize="lg">
											Raças
										</Tab>
									</Link>
									<Link href="/saude" style={{ zIndex: '10' }}>
										<Tab color="black" fontSize="lg">
											Saúde
										</Tab>
									</Link>
									<Link href="/servicos" style={{ zIndex: '10' }}>
										<Tab color="black" fontSize="lg">
											Serviços
										</Tab>
									</Link>
									<Link href="/blog" style={{ zIndex: '10' }}>
										<Tab color="black" fontSize="lg">
											Blog
										</Tab>
									</Link>
								</TabList>
								<TabIndicator mt="-22px" height={4} bg="hover" zIndex="base" />
							</Tabs>
							<HStack spacing="3">
								<Logotype />
							</HStack>
						</Flex>
					) : (
						<Box width="full">
							<Flex justify="space-between" flex="1">
								<Box display="flex" justifyContent="center" alignItems="center">
									<IconButton
										onClick={onOpen}
										variant="ghost"
										icon={<FiMenu fontSize="1.25rem" />}
										aria-label="Open Menu"
									/>
								</Box>

								<Logotype />
							</Flex>

							<Drawer
								placement="left"
								initialFocusRef={menuButtonRef}
								isOpen={isOpen}
								onClose={onClose}
								size="lg"
							>
								<DrawerOverlay />
								<DrawerContent backgroundColor="burguerMenuBackground">
									<DrawerHeader padding="0" minHeight="40px" alignItems="left">
										<DrawerCloseButton
											onClick={onClose}
											aria-label={'Close Menu'}
										/>
									</DrawerHeader>
									<DrawerBody>
										<VStack mt="6" alignItems="left">
											<VStack
												spacing="6"
												alignItems="left"
												fontFamily="GothamBold"
												fontSize="2xl"
												color="black"
											>
												<Link href="/" onClick={onClose}>
													<Text fontWeight="medium">Home</Text>
												</Link>
												<Link href="/patudos" onClick={onClose}>
													<Text fontWeight="medium">Patudos</Text>
												</Link>
												<Link href="/racas" onClick={onClose}>
													<Text fontWeight="medium">Raças</Text>
												</Link>
												<Link href="/saude" onClick={onClose}>
													<Text fontWeight="medium">Saúde</Text>
												</Link>
												<Link href="/servicos" onClick={onClose}>
													<Text fontWeight="medium">Serviços</Text>
												</Link>
												<Link href="/blog" onClick={onClose}>
													<Text fontWeight="medium">Blog</Text>
												</Link>
											</VStack>

											<HStack mt="12" position="absolute" bottom="10%">
												<Link passHref href={'/'}>
													<Button variant="red" as="span">
														ÁREA PESSOAL
													</Button>
												</Link>
												<Link passHref href={'/'}>
													<Button variant="red" as="span">
														ENGLISH
													</Button>
												</Link>
											</HStack>
										</VStack>
									</DrawerBody>
								</DrawerContent>
							</Drawer>
						</Box>
					)}
				</HStack>
			</Container>
		</Box>
	);
};
