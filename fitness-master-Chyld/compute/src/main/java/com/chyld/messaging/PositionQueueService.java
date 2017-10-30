package com.chyld.messaging;

import com.chyld.entities.Position;
import com.chyld.services.DeviceService;
import org.springframework.amqp.core.Message;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.HashMap;

@Service
public class PositionQueueService {
    private DeviceService service;

    @Autowired
    public void setService(DeviceService service) {
        this.service = service;
    }

    @RabbitListener(queues = "fit.queue.pos")
    @Transactional
    public void receive(Message msg, HashMap<String, Object> data){
        String key = msg.getMessageProperties().getReceivedRoutingKey();
        String serial = (String) data.get("serial");
        Position position = (Position) data.get("position");
        service.addPosition(serial, position);
    }
}
