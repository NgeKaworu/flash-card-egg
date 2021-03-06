import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.post('/record/create', controller.record.create);
  router.delete('/record/remove/:id', controller.record.remove);
  router.patch('/record/update', controller.record.update);
  router.get('/record/list', controller.record.list);
  router.patch('/record/review', controller.record.review);
  router.get('/record/review-all', controller.record.reviewAll);
  router.patch('/record/random-review', controller.record.randomReview);
  router.patch('/record/set-review-result', controller.record.setReviewResult);
};
