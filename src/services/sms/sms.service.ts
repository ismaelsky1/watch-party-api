import { Injectable } from '@nestjs/common';

// import AWS from 'aws-sdk';

@Injectable()
export class SmsService {
  //   public async sendingSMS(cellphone, message) {
  //     const params = {
  //       Message: message,
  //       PhoneNumber: cellphone,
  //     };
  //     const publishTextPromise = new AWS.SNS().publish(params).promise();
  //     publishTextPromise
  //       .then((data) => {
  //         return { MessageID: data.MessageId };
  //       })
  //       .catch((err) => {
  //         throw new Error(`Erro ao enviar o sms ${err}`);
  //       });
  //   }
}
