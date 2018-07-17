import { Hero } from "../hero";
import { HeroesComponent } from "./heroes.component";
import { of } from "../../../node_modules/rxjs/observable/of";

describe('HeroesComponent', () => {
    let component;
    let HEROES;
    let mockService;
    
    beforeEach(() => {
        HEROES = [
            {id:1, name:'catman', strength: 44},
            {id:2, name:'frogman', strength: 2},
            {id:3, name:'seaman', strength: 21}
        ];

        // create mock service with required methods
        mockService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);
        component = new HeroesComponent(mockService);
    })

    it('should delete the correct hero if delete() called', () => {
        // mockservice can return any value for a method call
        mockService.deleteHero.and.returnValue(of(true));
        component.heroes = HEROES;

        component.delete(HEROES[1]);

        expect(component.heroes[0]).toEqual(jasmine.objectContaining({
            name: 'catman'
        }))
        expect(component.heroes[1]).toEqual(jasmine.objectContaining({
            name: 'seaman'
        }))
    })

    it('should call deleteHero in service', () => {
        mockService.deleteHero.and.returnValue(of(true));
        component.heroes = HEROES;

        component.delete(HEROES[1]);

        expect(mockService.deleteHero).toHaveBeenCalled();
    })

    it('should subscribe to deleteHero when delete called', () => {
        mockService.deleteHero.and.returnValue(of(true));
        component.heroes = HEROES;

        component.delete(HEROES[1]);

        expect(mockService.deleteHero.subscribe).toHaveBeenCalled();
    })


})