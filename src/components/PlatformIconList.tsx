import { FC } from "react";
import { Platform } from "../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";

import {
  FaXbox,
  FaWindows,
  FaPlaystation,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList: FC<Props> = ({ platforms }) => {
  const IconMapObj: { [key: string]: IconType } = {
    playstation: FaPlaystation,
    xbox: FaXbox,
    pc: FaWindows,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    nintendo: SiNintendo,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  if (!platforms) return null;
  return (
    <HStack marginY={1}>
      {platforms.map((pt) => (
        <Icon key={pt.id} as={IconMapObj[pt.slug]} color={"gray.500"} />
      ))}
    </HStack>
  );
};
export default PlatformIconList;
