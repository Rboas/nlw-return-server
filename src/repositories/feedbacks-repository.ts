export interface FeedbackCreateData {
  type: string;
  comment: string;
  screenshot?: string;
}

// meio de campo entre o use-case e "prisma"
export interface FeedbacksRepository {
  create: (data: FeedbackCreateData) => Promise<void>;
}
