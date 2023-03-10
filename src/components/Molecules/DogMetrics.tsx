import { Box, Progress, Text } from '@chakra-ui/react';

interface IDogMetrics {
	metricsTitle: string;
	percentage: number;
}

export default function DogMetrics({ metricsTitle, percentage }: IDogMetrics) {
	const metricsStyles = {
		marginBottom: '1em',
		textTransform: 'uppercase',
		textAlign: 'left',
	};

	return (
		<Box w="25%">
			<Box sx={metricsStyles}>
				<Text>{metricsTitle}</Text>
			</Box>

			<Box>
				<Progress
					borderRadius="full"
					colorScheme="blue"
					height="32px"
					value={percentage}
				/>
			</Box>
		</Box>
	);
}
