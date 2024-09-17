import mongoose from "mongoose";
import { z } from "zod";

export const stockDataSchema = z.object({
  name: z.string(),
  last: z.string().transform(Number),
  buy: z.string().transform(Number),
  sell: z.string().transform(Number),
  volume: z.string().transform(Number),
  base_unit: z.string(),
});

const stockSchema = new mongoose.Schema({
  name: { type: String, required: true },
  last: { type: Number, required: true },
  buy: { type: Number, required: true },
  sell: { type: Number, required: true },
  volume: { type: Number, required: true },
  base_unit: { type: String, required: true },
});

export const CompanyStock = mongoose.model('Stock', stockSchema); 