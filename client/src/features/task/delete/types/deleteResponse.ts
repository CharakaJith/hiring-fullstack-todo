export interface DeleteSuccessResponse {
  success: true;
  response: {
    status: number;
    data: {
      message: string;
    };
  };
}

export interface DeleteErrorResponse {
  success: false;
  response: {
    status: number;
    data: {
      message: string;
    };
    stack: string | null;
  };
}

export type DeleteResponse = DeleteSuccessResponse | DeleteErrorResponse;
