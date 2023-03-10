import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
	Box,
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Button,
	Text,
} from '@chakra-ui/react';

import { Image } from '@chakra-ui/react';

interface IDogProfileCard {
	dogIMG: string;
	nameTitle: string;
	breedTitle: string;
	locationTitle: string;
	dogName: string;
	dogBreed: string;
	dogLocation: string;
	buttonText: string;
}

export default function DogProfileCard({
	dogIMG,
	nameTitle,
	breedTitle,
	locationTitle,
	dogName,
	dogBreed,
	dogLocation,
	buttonText,
}: IDogProfileCard) {
	const cardStyles = {
		width: '300px',
		height: '450px',
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
		<Box>
			<Card sx={cardStyles}>
				<CardHeader mt="-110px" mx="auto">
					<Image
						borderRadius="full"
						src={dogIMG}
						objectFit="cover"
						alt="Picture of the author"
						width={180}
						height={180}
					/>
				</CardHeader>

				<CardBody py={0} mb={5}>
					<Box>
						<Text color="gray.300" as="h6" textTransform="uppercase">
							{nameTitle}
						</Text>
						<Text as="p" textTransform="capitalize">
							{dogName}
						</Text>
					</Box>
					<Box pt={8}>
						<Text color="gray.300" as="h6" textTransform="uppercase">
							{breedTitle}
						</Text>
						<Text as="p" textTransform="capitalize">
							{dogBreed}{' '}
						</Text>
					</Box>
					<Box pt={8}>
						<Text color="gray.300" as="h6" textTransform="uppercase">
							{locationTitle}
						</Text>
						<Text as="p" textTransform="capitalize">
							{dogLocation}
						</Text>
					</Box>
				</CardBody>

				<CardFooter sx={cardFooter}>
					<Button sx={buttonStyles}>
						{buttonText}
						<ArrowForwardIcon ml={6} fontSize={30} />
					</Button>
				</CardFooter>
			</Card>
		</Box>
	);
}
