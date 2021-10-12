import LandingPage from "../components/LandingPage";
import Enzyme, {shallow} from "enzyme"
import Adapter from "@wojtekmaj/enzyme-adapter-react-17"

Enzyme.configure({adapter: new Adapter()});

describe('LandingPage',()=>{
    it("should have an title Welcome",()=>{
        const wrapper = shallow(<LandingPage/>)
        const title = wrapper.find('div h1')
        expect(title.text()).toBe("Welcome")
    })
    it("should have a button Start",()=>{
        const wrapper = shallow(<LandingPage/>)
        const button = wrapper.find('div Link button')
        expect(button.text()).toBe("Start")
    })
})