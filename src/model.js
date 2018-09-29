import * as tf from "@tensorflow/tfjs";

export default tf.sequential({
    layers: [
        tf.layers.conv1d({
            inputShape: [128, 64],
            kernelSize: 5,
            filters: 8,
            activation: 'relu',
            kernelInitializer: 'VarianceScaling'
        }),
        tf.layers.maxPooling1d({
            poolSize: 2,
            strides: 2
        }),
        tf.layers.conv1d({
            kernelSize: 5,
            filters: 16,
            activation: 'relu',
            kernelInitializer: 'VarianceScaling'
        }),
        tf.layers.maxPooling1d({
            poolSize: 2,
            strides: 2
        }),
        tf.layers.flatten(),
        tf.layers.dense({
            units: 128,
            kernelInitializer: 'VarianceScaling',
            activation: 'relu'
        })
    ]
});