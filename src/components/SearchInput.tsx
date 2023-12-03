import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

interface Props {}

function SearchInput({}: Props) {
    return (
        <InputGroup>
            <InputLeftElement children={<BsSearch />} />
            <Input
                id="search"
                borderRadius={20}
                placeholder="Search..."
                variant="filled"
            />
        </InputGroup>
    );
}

export default SearchInput;
