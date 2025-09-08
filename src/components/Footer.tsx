import { Text, Group } from "@mantine/core";
import type { FooterProps } from "../libs/Footer";
export default function Footer({} : FooterProps) {
  return (
    <Group p="md" justify="center">
      <Text>
        © Siriwipha 670612131 CPE207-2025. All rights reserved.
      </Text>
    </Group>
  );
}
