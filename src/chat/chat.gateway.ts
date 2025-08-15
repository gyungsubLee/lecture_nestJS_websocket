import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';

@WebSocketGateway()
export class ChatGateWay {
  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    return 'hello';
  }
}
