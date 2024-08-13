import {
    Box,
    Flex,
    Text,
    Image,
    Badge,
    IconButton,
    Heading,
    Stack,
    Icon,
    Progress
} from "@chakra-ui/react";
import { TimeIcon } from "@chakra-ui/icons";
import { FaShareAlt, FaRegBookmark } from "react-icons/fa";
import { BiSolidPieChartAlt } from "react-icons/bi";
import { MdOutlineHeadsetMic } from "react-icons/md";
import { forwardRef } from "react";
import { resizeImage } from '../utils/imageUtil';

const ContentCard = forwardRef(({edge}, ref) => {
    const {uri, height, width} = edge.image;
    const optimizedSrc = resizeImage(uri, width, height);

    return (
        <Box
            maxW="sm"
            borderRadius="lg"
            overflow="hidden"
            bg="white"
            boxShadow="md"
            position="relative"
            ref={ref}
        >
            <Image
                src={optimizedSrc}
                alt="Podcast Image"
                objectFit="cover"
                height="150px"
                width="100%"
                loading="lazy"
            />

            <Badge
                position="absolute"
                top="0"
                left="0"
                borderTopRightRadius="none"
                borderBottomLeftRadius="none"
                borderTopLeftRadius="lg"
                borderBottomRightRadius="lg"
                px="2"
                py="2"
                bg="tiger-orange.50"
                display="inline-flex"
                alignItems="center"
            >

                <IconButton
                    aria-label="Pie"
                    icon={<BiSolidPieChartAlt />}
                    variant="ghost"
                    color="tiger-orange.400" 
                    size="md"
                    height={3}
                    width={3}
                />
                <Text fontSize="xs" color="gray.900" fontWeight="bold" textTransform="capitalize">
                    30% Completed
                </Text>
            </Badge>

            <Badge
                position="absolute"
                right="2"
                top="110"
                borderRadius="full"
                px="3"
                py="1"
                bg="rgba(0, 0, 0, 0.7)"
                display="inline-flex"
                alignItems="center"
                zIndex="1"
            >
                <Flex alignItems="center">
                    <TimeIcon boxSize="4" color="white" />
                    <Text fontSize="sm" color="white" ml="1" fontWeight="bold">
                        {edge.length}M
                    </Text>
                </Flex>
            </Badge>

            <Box
                position="absolute"
                top="110"
                left="2"
                bg="tiger-orange.600"
                borderRadius="full"
                padding="2"
                display="flex"
                justifyContent="center"
                alignItems="center"
                boxSize="28px"
                zIndex="1"
            >
                <Icon as={MdOutlineHeadsetMic} boxSize="18px" color="white" />
            </Box>

            <Progress
                value={30}
                size="xs"
                colorScheme="tiger-orange.600"
                bg="gray.400"
            />

            <Box p="2" mb="12">
                <Stack spacing={0}>
                    <Text fontSize="xs" color="gray.700" textTransform="uppercase">
                        {edge.categories ? edge.categories[0].name : 'COMMUNICATING AS A LEADER'}
                    </Text>
                    
                    <Heading as="h1" size="sm" mb="2" noOfLines={3} color="black" fontWeight="bold" textTransform="capitalize">
                        {edge.name}
                    </Heading>

                    {edge.experts.map((expert, index) => (
                        <>
                            <Text fontSize="sm" color="gray.800" key={index} textTransform="capitalize">
                                {expert.firstName} {expert.lastName}
                            </Text>
                            <Text fontSize="xs" color="gray.700" fontWeight="bold" textTransform="capitalize">
                                {expert.company}
                            </Text>
                        </>
                    ))}
                </Stack>
            </Box>


            <Flex 
                justifyContent="end"
                alignItems="center"
                pt="2"
                position="absolute"
                bottom="0"
                right="0"
            >
                <IconButton
                    aria-label="Share"
                    icon={<FaShareAlt />}
                    variant="ghost"
                    colorScheme="orange"
                    size="lg"
                    color="tiger-orange.600" 
                />
                <IconButton
                    aria-label="Bookmark"
                    icon={<FaRegBookmark />}
                    variant="ghost"
                    colorScheme="orange"
                    size="lg"
                    color="tiger-orange.600"
                />
            </Flex>
        </Box>
    )
});

export default ContentCard;