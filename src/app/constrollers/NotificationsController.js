import User from '../models/User';
import Notification from '../schemas/Notification';
import Appointment from '../models/Appointment';

class NotificationsController {
    async index(req, res) {
        const isProvider = await User.findOne({
            where: { id: req.userId, provider: true },
        });
        if (!isProvider) {
            return res.status(401).json({
                error: 'Somente profissionais tem acesso às notificações',
            });
        }
        const notifications = await Notification.find({
            user: req.userId,
        })
            .sort({ createdAt: 'desc' })
            .limit(20);
        return res.json(notifications);
    }

    async update(req, res) {
        const notification = await Notification.findByIdAndUpdate(
            req.params.id,
            { read: true },
            { new: true }
        );

        return res.status(201).json(notification);
    }
}

export default new NotificationsController();
