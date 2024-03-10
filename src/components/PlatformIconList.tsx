import {
    FaWindows,
    FaPlaystation,
    FaXbox,
    FaApple,
    FaLinux,
    FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiAtari, SiNintendo, SiSega } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import Platform from "../entities/Platform";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
    platforms: Platform[];
}

function PlatformIconList({ platforms }: Props) {
    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        ios: MdPhoneIphone,
        web: BsGlobe,
        android: FaAndroid,
        sega: SiSega,
        atari: SiAtari,
    };
    return (
        <HStack>
            {platforms?.map((platform) => (
                <Icon key={platform.id} as={iconMap[platform.slug]} color={"gray.500"} />
            ))}
        </HStack>
    );
}

export default PlatformIconList;
