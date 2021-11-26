import Header from "@/components/Header.vue";
import { mount } from "@vue/test-utils";

describe("Header.vue", () => {
    it("renders titulo cuando pase", () => {
        const title = "Pokedex";

        const wrapper = mount(Header, {
            a: {
                title: title;
            },
        });
        
        expect(wrapper.html()).toMatch(title);
    });
});