import { MessageService } from "./message.service";

describe('MessageService', () => {
    let service: MessageService;

    it('should add a message when add() called', () => {
        service = new MessageService();
        
        service.add('');

        expect(service.messages.length).toBeGreaterThan(0);
    })

    it('should clear all messages when clear() is called', () => {
        service = new MessageService();
        service.add('');

        service.clear();

        expect(service.messages.length).toBe(0);
    })
})