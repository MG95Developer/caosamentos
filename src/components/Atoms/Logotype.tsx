// MOLECULE
import { Box } from '@chakra-ui/react';

import Link from 'next/link';
import Image from 'next/image';

export default function Logotype() {
	return (
		<Link href="/">
			<Box
				as="span"
				width={{ base: '60px', md: '80px', lg: '100px' }}
				display="flex"
				justifyContent="center"
				alignItems="center"
			>
				<Image
					width={90}
					height={90}
					priority
					src="/images/logotype.webp"
					alt="caosamentos logotype"
				/>
			</Box>
		</Link>
	);
}
