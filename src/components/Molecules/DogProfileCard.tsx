import Link from 'next/link';

import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
	Box,
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Button,
	Text,
	Avatar,
	Flex,
} from '@chakra-ui/react';

import { Image } from '@chakra-ui/react';

import { FaMale, FaFemale } from 'react-icons/fa';

interface IDogProfileCard {
	dogIMG: string;
	dogName: string;
	dogBreed: string;
	dogGender: string;
	dogLocation: string;
	buttonText: string;
	buttonURL: string;
}

export default function DogProfileCard({
	dogIMG,
	dogName,
	dogBreed,
	dogGender,
	dogLocation,
	buttonText,
	buttonURL,
}: IDogProfileCard) {
	const cardStyles = {
		width: '300px',
		height: '500px',
		borderRadius: '25px',
		margin: '1em',
	};

	const cardFooter = {
		margin: '0 auto',
		padding: '1em 0',
	};

	const buttonStyles = {
		bg: '#00d9dd',
		color: 'white',
		textTransform: 'uppercase',
		borderRadius: '25px',
		padding: '1.5em 2em',
		marginBottom: '1em',
		_hover: {
			color: 'black',
		},
	};

	return (
		<Card sx={cardStyles}>
			<CardHeader mt="-110px" mx="auto" position="relative">
				<Image
					borderRadius="full"
					src={dogIMG}
					objectFit="cover"
					alt="Picture of the author"
					width={220}
					height={220}
				/>
				<Box position="absolute" top="30px" left="170px">
					<Flex>
						<Avatar w="75px" h="75px" src="/images/card-image.jpeg" />
					</Flex>
				</Box>
				<Box
					position="absolute"
					top="210px"
					left="105px"
					w="50px"
					h="50px"
					display="flex"
					justifyContent="center"
					alignItems="center"
				>
					{dogGender == 'male' ? (
						<Text as="span" bg="blue.300" padding=".5em" borderRadius="50%">
							<FaMale color="white" size={35} />
						</Text>
					) : (
						<Text as="span" bg="pink.300" padding=".5em" borderRadius="50%">
							<FaFemale color="white" size={35} />
						</Text>
					)}
				</Box>
			</CardHeader>

			<CardBody py={0} mb={5}>
				<Box>
					<Text display="none" as="span" textTransform="capitalize">
						{dogGender}
					</Text>
					<Text color="gray.300" as="h6" textTransform="uppercase">
						nome
					</Text>
					<Text as="p" textTransform="capitalize">
						{dogName}
					</Text>
				</Box>
				<Box pt={8}>
					<Text color="gray.300" as="h6" textTransform="uppercase">
						raça
					</Text>
					<Text as="p" textTransform="capitalize">
						{dogBreed}{' '}
					</Text>
				</Box>
				<Box pt={8}>
					<Text color="gray.300" as="h6" textTransform="uppercase">
						localização
					</Text>
					<Text as="p" textTransform="capitalize">
						{dogLocation}
					</Text>
				</Box>
			</CardBody>

			<CardFooter sx={cardFooter}>
				<Link href={buttonURL}>
					<Button as="label" sx={buttonStyles}>
						{buttonText}
						<ArrowForwardIcon ml={6} fontSize={30} />
					</Button>
				</Link>
			</CardFooter>
		</Card>
	);
}
