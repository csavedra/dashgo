import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align="center">
            { showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Carlos Savedra</Text>
                    <Text color="gray.300" fontSize="small" ml="6">
                        carlos.savedra71@gmail.com
                    </Text>
                </Box>
            )}


            <Avatar size="md" name="Carlos Uavedra" src="" />
        </Flex>
    );
}